import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	MediaUpload,
	MediaUploadCheck,
	RichText,
} from "@wordpress/block-editor";
import {
	Button,
	TextControl,
	ToggleControl,
	DatePicker,
	DateTimePicker,
	Popover,
} from "@wordpress/components";
import { useEffect, useState } from "@wordpress/element";
import { edit, trash } from "@wordpress/icons";

export default function Edit({ attributes, setAttributes }) {
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

	const blockProps = useBlockProps({
		className: "ud-image-rotator-block alignfull",
	});
	const [editing, setEditing] = useState(null); // 'text' | 'button'
	const [showImageModal, setShowImageModal] = useState(false);

	const [randomImage, setRandomImage] = useState(null);
	useEffect(() => {
		if (images.length > 0) {
			const pick = images[Math.floor(Math.random() * images.length)];
			setRandomImage(pick);
		}
	}, [images]);

	const onSelectImages = (media) => {
		const selected = Array.isArray(media) ? media : [media];
		const mapped = selected.map((item) => {
			// Manuelles srcset bauen:
			const sizeEntries = item.sizes
				? Object.values(item.sizes)
						.filter((s) => s?.url && s?.width)
						.map((s) => `${s.url} ${s.width}w`)
				: [];

			return {
				id: item.id,
				url: item.url,
				alt: item.alt || "",
				srcset: sizeEntries.join(", "),
				sizes: "100vw", // oder dynamisch
			};
		});

		setAttributes({ images: mapped });
	};

	return (
		<div {...blockProps}>
			<div className="ud-image-rotator-block__image-wrapper">
				{randomImage && (
					<img src={randomImage.url} alt={randomImage.alt || ""} />
				)}
				{showImageModal && (
					<div
						className="image-modal-backdrop"
						onClick={() => setShowImageModal(false)}
					>
						<div
							className="image-modal"
							onClick={(e) => e.stopPropagation()}
						>
							<h3>{__("Bilder bearbeiten", "ud-plugin")}</h3>

							{/* Vorschau */}
							{images.length > 0 && (
								<div className="image-preview">
									{images.map((img, index) => (
										<div
											className="image-wrapper"
											key={img.id}
										>
											<img
												src={img.url}
												alt={img.alt || ""}
											/>
											<Button
												icon={trash}
												label={__(
													"Bild entfernen",
													"ud-plugin",
												)}
												onClick={() => {
													const updated = [...images];
													updated.splice(index, 1);
													setAttributes({
														images: updated,
													});
												}}
												className="remove-button"
											/>
										</div>
									))}
								</div>
							)}

							{/* Upload */}
							<div className="button_line">
								<Button
									onClick={() => setShowImageModal(false)}
									variant="link"
								>
									{__("Schliessen", "ud-plugin")}
								</Button>
								<MediaUploadCheck>
									<MediaUpload
										onSelect={onSelectImages}
										allowedTypes={["image"]}
										multiple
										gallery
										value={images.map((img) => img.id)}
										render={({ open }) => (
											<Button onClick={open} isPrimary>
												{__(
													"Bilder auswählen",
													"ud-plugin",
												)}
											</Button>
										)}
									/>
								</MediaUploadCheck>
							</div>
						</div>
					</div>
				)}
				<Button
					icon={edit}
					label={__("Bild bearbeiten", "ud-plugin")}
					onClick={() => setShowImageModal(true)}
					className="edit-button"
				/>
			</div>

			<div className="ud-image-rotator-block__text-wrapper">
				<RichText
					tagName="p"
					className="ud-image-rotator-block__text"
					value={text}
					placeholder={__("Spruch hier eingeben…", "ud-plugin")}
					onChange={(val) => setAttributes({ text: val })}
				/>
			</div>

			<div className="ud-image-rotator-block__button-wrapper">
{(buttonLabelLine1 || buttonLabelLine2) && buttonUrl && (
	<a href={buttonUrl} className="button">
		{buttonLabelLine1 && <span className="line1">{buttonLabelLine1}</span>}
		{buttonLabelLine2 && <span className="line2">{buttonLabelLine2}</span>}
	</a>
)}

				<Button
					icon={edit}
					label={__("Teaser-Button bearbeiten", "ud-plugin")}
					onClick={() =>
						setEditing(editing === "button" ? null : "button")
					}
					className="edit-button"
				/>
				{editing === "button" && (
					<Popover
						position="middle center"
						onClose={() => setEditing(null)}
						focusOnMount={false}
						anchor={null} // ← wirklich null, nicht undefined
						className={
							"ud-image-rotator-block__popover teaser_button"
						}
					>
						<div className="ud-image-rotator-block__popover__content">
							<h3>
								{__("Teaser-Button bearbeiten", "ud-plugin")}
							</h3>
							<div className="input-row">
								<div>
<TextControl
	label="Button-Text (Zeile 1)"
	value={buttonLabelLine1}
	onChange={(val) => setAttributes({ buttonLabelLine1: val })}
	__next40pxDefaultSize={true}
	__nextHasNoMarginBottom={true}
/>
								</div>
								<div>
<TextControl
	label="Button-Text (Zeile 2)"
	value={buttonLabelLine2}
	onChange={(val) => setAttributes({ buttonLabelLine2: val })}
	__next40pxDefaultSize={true}
	__nextHasNoMarginBottom={true}
/>
								</div>
<div>
<TextControl
	label="Button-Link (URL)"
	value={buttonUrl}
	onChange={(val) => setAttributes({ buttonUrl: val })}
	__next40pxDefaultSize={true}
	__nextHasNoMarginBottom={true}
/>
</div>
							</div>
							<ToggleControl
								label={__(
									"Button zeitlich begrenzen",
									"ud-plugin",
								)}
								checked={!!enableDateRange}
								onChange={(value) =>
									setAttributes({ enableDateRange: value })
								}
								__nextHasNoMarginBottom={true}
							/>
							{attributes.enableDateRange && (
								<div className="date-row">
									<div>
										<label>
											{__("Startdatum", "ud-plugin")}
										</label>
										<DatePicker
											currentDate={attributes.startDate}
											onChange={(val) =>
												setAttributes({
													startDate: val,
												})
											}
										/>
									</div>
									<div>
										<label>
											{__("Enddatum", "ud-plugin")}
										</label>
										<DatePicker
											currentDate={attributes.endDate}
											onChange={(val) =>
												setAttributes({ endDate: val })
											}
										/>
									</div>
								</div>
							)}
						</div>
					</Popover>
				)}
			</div>
		</div>
	);
}
