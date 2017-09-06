var View = function(parent)
{
    this.parent_ = parent;
    this.initialize();
};


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
	this.inputElement_.moving = false;


	this.inputElement_.onkeydown = function(event)
	{
		var char = event.key;
		if(!parseFloat(char)
			&& char !== '.'
			&& char !== 'Backspace'
			&& char !== 'Delete'
			&& char !== 'ArrowLeft'
			&& char !== 'ArrowRight'
		)
		{
			event.preventDefault();
		}
	};
	
	this.inputElement_.onmousedown = function(event)
	{
		var target = event.target;
		var info = target.getBoundingClientRect();
		if(info.right === event.pageX && info.bottom === event.pageY) {
			target.style.cursor = 'e-resize';
		}
		else if(event.pageX > info.left && event.pageX < info.right && event.pageY > info.top && event.pageY < info.bottom) {

		}
		else {
			target.style.cursor = 'text';
		}
	}




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
