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
		this.OverlayMaxOpacity = 0.15;

		/* Dimensions & positions */
		this.CoverImageHeight = 200;
		this.PopupTopY = 238;
		this.PopupAlreadyPresentTopY = 138;
		this.PopupClosedTopY = 38;
		this.PopupScale = 1.0;
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
		this.ImageCategories = [ "Colors", "Gradients", "Abstract", "Architecture", "Cities", "Art", "Nature", "Science" ];
	}
}

export default (new Constants());