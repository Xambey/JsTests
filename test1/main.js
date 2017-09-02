
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

    view.inputElement.input = function(event)
	{
		if(!view.inputElement.hidden)
			this.value = this.value + String.fromCharCode(event.charCode);
	};

	view.button.onclick = function(event) {
		if(view.inputElement.hidden)
		{
			view.inputElement.style.visibility = 'visible';
			view.value = data.get();
			view.inputElement.hidden = false;
		}
		else
		{
			view.inputElement.style.visibility = 'hidden';
			data.set(view.value);
			view.inputElement.hidden = true;
		}
	}
}
