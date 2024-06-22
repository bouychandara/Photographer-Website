export default function Validation(event)
{
    const element = event.target,
    parentNode = element.parentElement,
    valid = element.validity.valid,
    nextElement = parentNode.nextElementSibling,
    formElement = parentNode.parentElement,
    smallNode = document.createElement('small');

    if(!valid)
    {
        if(nextElement)
        {
            nextElement.nodeName === 'SMALL' ? (smallNode.remove(),nextElement.textContent = element.validationMessage,nextElement.className = "text-white") : (formElement.insertBefore(smallNode,nextElement),smallNode.textContent = element.validationMessage,smallNode.className = "text-white");
        }
        else
        {
            smallNode.textContent = element.validationMessage;
            smallNode.className = "text-white";
            formElement.appendChild(smallNode);
        }
    }
    else
    {
        if(nextElement)
        {
            nextElement.nodeName === 'SMALL' ? nextElement.remove() : smallNode.remove();
        }
    }
}