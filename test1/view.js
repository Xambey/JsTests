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
	this.inputElement_.resizing = false;
	this.inputElement_.lkmPressed = false;

	this.inputElement_.onkeydown = function(event)
	{
		var char = event.key;


		if(!parseFloat(char)
			&& char !== 'Backspace'
			&& char !== 'Delete'
			&& char !== 'ArrowLeft'
			&& char !== 'ArrowRight'
			&& char !== '.'
			|| (char === '.' && this.hasDotPreventOrNextSymbol())
		)
		{
			event.preventDefault();
		}


	};


	this.inputElement_.hasDotPrevOrNextSymbol = function()
	{
		return this.value[this.selectionStart - 1] === '.' || (typeof this.value[this.selectionStart] !== 'undefined' ?  this.value[this.selectionStart] === '.' : false);
	}


	this.inputElement_.isLetter = function(char)
	{
		return typeof char === 'string' && char.length === 1 && char.toUpperCase() !== char.toLowerCase();
	};


	this.inputElement_.onmousedown = function(event)
	{
		var target = event.target;
		var info = target.getBoundingClientRect();
		if(event.button == 0 && info.right - event.pageX < 3 && info.bottom - event.pageY < 3 && !target.resizing) {
			target.resizing = true;
			target.style.cursor = 'move';

		}
		target.lkmPressed = true;
	};


	this.inputElement_.onmouseup = function(event)
	{
		if(event.button == 0)
		{
			event.target.resizing = false;
			event.target.style.cursor = 'text';
			event.target.lkmPressed = false;
		}
	};


	this.inputElement_.onmousemove = function(event)
	{
		var target = event.target;
		var info = target.getBoundingClientRect();

		if(document.body.appendChild(document.createElement('div'))) {

		}

		if(target.lkmPressed && target.resizing) {
			target.style.width += (event.pageX - info.width) + 'px';
			target.style.bottom += (event.pageY - info.height) + 'px';
		}
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
