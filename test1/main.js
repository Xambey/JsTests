
var importedView = document.createElement('script');
importedView.src = './view.js';
document.head.appendChild(importedView);

var importedData = document.createElement('script');
importedData.src = './data.js';
document.head.appendChild(importedData);


function main()
{
    var view = new View();
    var data = new Data();

    view.setInputHandler(
    	function(event)
		{
			if(!view.isHidden())
				view.setTextToEditor(view.getTextFromEditor() + String.fromCharCode(event.charCode));
		}
	);

	view.setButtonOnClickHandler(
		function(event) {
			if(view.inputElement.hidden)
			{
				view.showEditor();
				view.setTextToEditor(data.get());
			}
			else
			{
				view.hideEditor();
				data.set(view.getTextFromEditor());
			}
	}
	);
}
