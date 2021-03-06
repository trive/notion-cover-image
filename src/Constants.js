class Constants {
	constructor() {

		/* Labels */
		this.Title = 'Travel List';
		this.AddIconLabel = 'Add Icon';
		this.AddCoverLabel = 'Add Cover';
		this.AddDiscussionLabel = 'Add Discussion';

		/* Visual */
		this.StandardGray = '#37352F';
		this.MidGray = '#AFAEAC';
		this.LightGray = '#E1E1E0';
		this.Red = '#FF2943';
		this.OverlayMaxOpacity = 0.15;
		this.OverlayDarken = 0.85;
		this.CornerRadius = '10px';

		/* Dimensions & positions */
		this.CoverImageHeight = 200;
		this.PopupTopY = 238;
		this.PopupAlreadyPresentTopY = 218;
		this.PopupClosedTopY = 38;
		this.PopupScale = 1.0;
		this.PopupAlreadyPresentScale = 0.98;
		this.PopupClosedScale = 0.8;
		this.PopupWidth = 365/375;

		/* z indexes */
		this.zPopup = 4;
		this.zCoverImage = 3;
		this.zOverlay = 0;

		/* Spring */
		this.SpringStiffness = 300;
		this.SpringDamping = 30;
		this.SpringParameters = { stiffness: this.SpringStiffness, damping: this.SpringDamping };

		/* Image Picker */
		this.Numbers = [1,2,3,4,5,6];
		this.PickerPath = "./images/picker/";
		this.ThumbnailsPath = "./images/picker-thumbnails/";
		this.ImageCategories = [ "Colors", "Gradients", "Abstract", "Architecture", "Cities", "Art", "Nature", "Science" ];
	}
}

export default (new Constants());