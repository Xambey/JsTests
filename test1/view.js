var View = function(parent)
{
    this.parent_ = parent;
    this.initialize();
};


View.prototype.inputElement_;


View.prototype.parent_;


View.prototype.setText = function(text)
{
    this.inputElement_.value = text;
};


View.prototype.getText = function()
{
    return this.inputElement_.value;
};


View.prototype.initialize = function()
{
	this.inputElement_ = document.createElement('input');
	this.inputElement_.style.width = '200px';
	this.inputElement_.style.height = '20px';

	this.inputElement_.hidden = false;

	//устанавливаем стандартный обработчик ввода
	this.inputElement_.input = function(event)
    {
        this.setText(this.getText() + String.fromCharCode(event.charCode));
    };


	if(this.parent_)
	    this.parent_.appendChild(this.inputElement_);
	else
	    document.body.appendChild(this.inputElement_)
};


View.prototype.isHidden = function()
{
    return this.inputElement_.hidden;
};


View.prototype.show = function()
{
	this.inputElement_.style.visibility = 'visible';
	this.inputElement_.hidden = false;
};


View.prototype.hide = function()
{
	this.inputElement_.style.visibility = 'hidden';
	this.inputElement_.hidden = true;
};
