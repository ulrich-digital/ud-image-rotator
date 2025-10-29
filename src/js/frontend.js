import gsap from "gsap";
document.addEventListener("DOMContentLoaded", function () {
	const containers = document.querySelectorAll(".ud-image-rotator-block");
	containers.forEach((container) => {
		const images = JSON.parse(container.dataset.images || "[]");
		if (images.length > 0) {
			const randomImage =
				images[Math.floor(Math.random() * images.length)];
			const imgTag = document.createElement("img");
			imgTag.src = randomImage.url;
			imgTag.alt = randomImage.alt || "";

if (randomImage.srcset) {
	imgTag.setAttribute("srcset", randomImage.srcset);
}
if (randomImage.sizes) {
	imgTag.setAttribute("sizes", randomImage.sizes);
}
			const wrapper = container.querySelector(
				".ud-image-rotator-block__image-wrapper",
			);
			if (wrapper) {
				wrapper.innerHTML = ""; // vorheriges Bild entfernen (optional)
				wrapper.appendChild(imgTag);
			}
		}
	});

	/* =============================================================== *\ 
       Animation
	\* =============================================================== */

	const blocks = document.querySelectorAll(".ud-image-rotator-block");

	blocks.forEach((block) => {
		const image = block.querySelector(
			".ud-image-rotator-block__image-wrapper img",
		);
		const textWrapper = block.querySelector(
			".ud-image-rotator-block__text-wrapper",
		);
		const buttonWrapper = block.querySelector(
			".ud-image-rotator-block__button-wrapper",
		);

		if (!image) return; // Button und Text ist optional

		// Set initial states
		gsap.set(image, { opacity: 0 });
		if (textWrapper) {
			gsap.set(textWrapper, { y: 80, opacity: 0 });
		}
		if (buttonWrapper) {
			gsap.set(buttonWrapper, { x: 150, rotation: 90, opacity: 0 });
		}

		// Animation timeline
		const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

		tl.to(image, { opacity: 1, duration: 0.4 });

		if (textWrapper) {
			gsap.set(textWrapper, { y: 80, opacity: 0 });
			tl.to(textWrapper, { y: 0, opacity: 1, duration: 0.4 }, "+=0.02");
		}

		if (buttonWrapper) {
			gsap.set(buttonWrapper, { x: 150, rotation: 90, opacity: 0 });
			tl.to(
				buttonWrapper,
				{ x: 0, rotation: 12, opacity: 1, duration: 0.4 },
				"+=0.02",
			);
		}
	});
});
