function LoadingIcon() {
    this.$elie = $("#loading-image"),
    this.degree = 0;
}

LoadingIcon.prototype.rotate = function() {
    this.$elie.css({ WebkitTransform: 'rotate(' + this.degree + 'deg)' });
    this.$elie.css({ '-moz-transform': 'rotate(' + this.degree + 'deg)' });
    setTimeout(function () {
        this.degree ++; rotate();
    }, 5);
}

LoadingIcon.prototype.Show = function() {
    this.$elie.show();
}

LoadingIcon.prototype.Hide = function() {
    this.$elie.hide();
}