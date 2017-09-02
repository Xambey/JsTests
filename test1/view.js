var View = function()
{
    this.initialize();
};


View.prototype.inputElement;

View.prototype.button = null;


View.prototype.setTextToEditor = function(text)
{
    this.inputElement.value = text;
}


View.prototype.getTextFromEditor = function()
{
    return this.inputElement.value;
}


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


View.prototype.isHidden = function()
{
    return this.inputElement.hidden;
}


View.prototype.showEditor = function()
{
	this.inputElement.style.visibility = 'visible';
	this.inputElement.hidden = false;
}


View.prototype.hideEditor = function()
{
	this.inputElement.style.visibility = 'hidden';
	this.inputElement.hidden = true;
}


View.prototype.setInputHandler = function(func)
{
    this.inputElement.input = func;
}


View.prototype.setButtonOnClickHandler = function(func)
{
    this.button.onclick = func;
}

