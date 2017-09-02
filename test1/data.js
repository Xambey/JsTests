
var Data = function()
{
}

Data.prototype.value = '';

Data.prototype.set = function(text)
{
    if(typeof text === 'string')
        this.value = text;
};


Data.prototype.addChar = function(char)
{
    if(typeof char === 'string')
        this.value += char;
};


Data.prototype.removeChar = function()
{
    this.value = this.value.splice(0, this.value.length - 1);
};


Data.prototype.clear = function()
{
    this.value = '';
};

Data.prototype.get = function()
{
    return this.value;
};