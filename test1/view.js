var View = function()
{
    this.initialize();
};


View.prototype.inputElement = null;

View.prototype.button = null;

View.prototype.initialize = function()
{
    this.initializeInputElement();
    this.initializeButton();
}

View.prototype.initializeInputElement = function()
{
	this.inputElement = document.createElement('input');
	this.inputElement.style.width = '200px';
	this.inputElement.style.height = '20px';

	this.inputElement.hidden = false;

	document.body.appendChild(this.inputElement);

}


View.prototype.initializeButton = function()
{
    this.button = document.createElement('button');

    this.button.textContent = 'Hide/Show';

    document.body.appendChild(this.button);

}


