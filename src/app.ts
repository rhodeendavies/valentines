export class App {
	answered = false;
	error = false;
	videoNum = 0;
	errorVideo1: HTMLVideoElement;
	errorVideo2: HTMLVideoElement;
	errorVideo3: HTMLVideoElement;
	errorVideo4: HTMLVideoElement;
	errorVideo5: HTMLVideoElement;
	errorVideo6: HTMLVideoElement;
	successVideo: HTMLVideoElement;
	errorFade = false;

	attached() {
		this.errorVideo1 = document.getElementById("errorVideo1") as HTMLVideoElement;
		this.errorVideo2 = document.getElementById("errorVideo2") as HTMLVideoElement;
		this.errorVideo3 = document.getElementById("errorVideo3") as HTMLVideoElement;
		this.errorVideo4 = document.getElementById("errorVideo4") as HTMLVideoElement;
		this.errorVideo5 = document.getElementById("errorVideo5") as HTMLVideoElement;
		this.errorVideo6 = document.getElementById("errorVideo6") as HTMLVideoElement;
		this.successVideo = document.getElementById("successVideo") as HTMLVideoElement;
	}

	yes() {
		this.answered = true;
		this.successVideo.play();
	}

	no() {
		this.error = true;
		this.errorFade = true;

		++this.videoNum;
		if (this.videoNum > 6) {
			this.videoNum = 1;
		}

		let length = 0;

		switch (this.videoNum) {
			case 1:
				this.errorVideo1.play();
				length = 1;
				break;
			case 2:
				this.errorVideo2.play();
				length = 1;
				break;
			case 3:
				this.errorVideo3.play();
				length = 1;
				break;
			case 4:
				this.errorVideo4.play();
				length = 3;
				break;
			case 5:
				this.errorVideo5.play();
				length = 3;
				break;
			case 6:
				this.errorVideo6.play();
				length = 4;
				break;
			default:
				break;
		}

		setTimeout(() => {
			this.errorFade = false;
		}, length * 1000);
	}

	random(min: number, max: number) {
		return Math.floor(Math.random() * (max - min + 1) + min)
	}
}
