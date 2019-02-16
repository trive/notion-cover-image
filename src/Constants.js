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

		/* Dimensions */
		this.CoverImageHeight = 200;

		/* z indexes */
		this.zPopup = 4;
		this.zCoverImage = 3;
		this.zOverlay = 0;

		/* Spring */
		this.SpringStiffness = 300;
		this.SpringDamping = 30;
		this.SpringParameters = { stiffness: this.SpringStiffness, damping: this.SpringDamping };
	}
}

export default (new Constants());