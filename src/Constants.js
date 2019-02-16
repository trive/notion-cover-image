class Constants {
  constructor() {

  	/* Labels */
  	this.Title = 'Travel List';
  	this.AddIconLabel = 'Add Icon';
  	this.AddCoverLabel = 'Add Cover';
  	this.AddDiscussionLabel = 'Add Discussion';

  	/* Colors */
    this.StandardGray = '#37352F';
    this.MidGray = '#AFAEAC';
    this.LightGray = '#E1E1E0';

    /* Dimensions */
    this.CoverImageHeight = 200;

    /* z indexes */
    this.zPopup = -1;
    this.zCoverImage = -2;
    this.zOverlay = -3;

    /* Spring */
    this.SpringStiffness = 300;
    this.SpringDamping = 30;
    this.SpringParameters = { stiffness: this.SpringStiffness, damping: this.SpringDamping };
  }
}

export default (new Constants());