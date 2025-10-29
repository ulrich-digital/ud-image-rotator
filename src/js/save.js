import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const {
		images,
		text,
		buttonUrl,
		buttonLabelLine1,
		buttonLabelLine2,
		startDate,
		endDate,
		enableDateRange,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: "ud-image-rotator-block alignfull",
		"data-images": JSON.stringify(images),
	});

	// === Datumskontrolle für Button ===
	let showButton = true;
	if (enableDateRange) {
		try {
			const now = new Date();
			const start = startDate ? new Date(startDate) : null;
			const end = endDate ? new Date(endDate) : null;
			if (start && now < start) showButton = false;
			if (end && now > end) showButton = false;
		} catch (e) {
			console.warn("Fehler beim Datumsvergleich:", e);
			showButton = false;
		}
	}

	// === Target-Regel ===
	let linkTarget = undefined;
	let linkRel = undefined;

	if (buttonUrl) {
		try {
			const isMediaFile = /\.(pdf|jpe?g|png|gif|webp|avif|mp4|mov|zip|docx?)$/i.test(buttonUrl);
			const isExternal = !buttonUrl.startsWith("/") && !buttonUrl.includes(window?.location?.host);

			if (isMediaFile || isExternal) {
				linkTarget = "_blank";
				linkRel = "noopener noreferrer";
			}
		} catch (e) {
			console.warn("Fehler bei Linkprüfung:", e);
		}
	}

	return (
		<div {...blockProps}>
			<div className="ud-image-rotator-block__image-wrapper">{/* Bild per JS */}</div>

			{text && (
				<div className="ud-image-rotator-block__text-wrapper">
					<RichText.Content
						tagName="p"
						className="ud-image-rotator-block__text"
						value={text}
					/>
				</div>
			)}

			{showButton && (buttonLabelLine1 || buttonLabelLine2) && buttonUrl && (
				<div className="ud-image-rotator-block__button-wrapper">
					<a
						href={buttonUrl}
						className="button"
						target={linkTarget}
						rel={linkRel}
					>
						{buttonLabelLine1 && <span className="line1">{buttonLabelLine1}</span>}
						{buttonLabelLine2 && <span className="line2">{buttonLabelLine2}</span>}
					</a>
				</div>
			)}
		</div>
	);
}
