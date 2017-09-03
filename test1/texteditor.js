
var importedView = document.createElement('script');
importedView.src = './view.js';
document.head.appendChild(importedView);

var importedData = document.createElement('script');
importedData.src = './data.js';
document.head.appendChild(importedData);


var TextEditor = function(parent)
{
	this.data_ = new Data();

	if(parent)
		this.view_ = new View(parent);
	else
		this.view_ = new View(); // или добавится в body


//	this.view_.setButtonOnClickHandler(
//		function(event) {
//			if(this.view_.inputElement.hidden)
//			{
//				this.view_.showEditor();
//				this.view_.setTextToEditor(this.data_.get());
//			}
//			else
//			{
//				this.view_.hideEditor();
//				this.data_.set(this.view_.getTextFromEditor());
//			}
//		}
//	);

};


TextEditor.prototype.data_;


TextEditor.prototype.view_;


TextEditor.prototype.setText = function(text)
{
	if(this.view_.isHidden())
		this.data_.set(text);
	else
		this.view_.setText(text);
};


TextEditor.prototype.getText = function()
{
	if(this.view_.isHidden())
		return this.data_.get();
	return this.view_.getText();
};


TextEditor.prototype.show = function()
{
	if(this.view_.isHidden())
		this.view_.show();
}


TextEditor.prototype.hide = function()
{
	if(!this.view_.isHidden())
		this.view_.hide();
}

