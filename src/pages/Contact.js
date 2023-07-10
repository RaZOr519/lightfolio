import React from "react";
import arrow from "../components/images/arrow-down.png";
import "../Homepage.css";

function Contact() {
	return (
		<div className="App-3">
			<div className="Card-Container">
				<div class="Card-Samples-6">
					<a href="https://wa.me/+94702831414" target="_blank">
						<div className="Card-Heading-3">
							Contact <br /> Me <br />
							through
							<br /> WhatsApp
						</div>
					</a>
					<div className="Card-Text-3">WhatsApp</div>
					<a href="https://wa.me/+94702831414" target="_blank"></a>
				</div>

				<div class="Card-Samples-7">
					<a href="https://t.me/rzr519" target="_blank">
						<div className="Card-Heading-3">
							Contact <br /> Me <br />
							through
							<br /> Telegram
						</div>
					</a>
					<div className="Card-Text-3">Telegram</div>
					<a href="https://t.me/rzr519" target="_blank"></a>
				</div>
			</div>
		</div>
	);
}

export default Contact;
