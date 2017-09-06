var importedTextEditor = document.createElement('script');
importedTextEditor.src = './texteditor.js';
document.head.appendChild(importedTextEditor);

function main()
{
	var element = document.createElement('div');
	element.style.height = '100px';
	element.style.width = '200px';
	element.style.backgroundColor = 'black';

	document.body.appendChild(element);

    var editor = new TextEditor(element);

	var button = document.createElement('button');
	button.textContent = 'Hide/Show';

	element.appendChild(button);

	var hiddenEditor = false;
	button.onclick = function(event)
	{
		if(hiddenEditor)
		{
			editor.show();
			hiddenEditor = false;
		}
		else
		{
			editor.hide();
			hiddenEditor = true;
		}

	}

};
