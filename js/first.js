var imgs = Array.from( document.querySelectorAll(".item img") );
var lightBoxContainer = document.getElementById("lightBoxContainer");
var lightBoxItem = document.getElementById("lightBoxItem");
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var closeBtn = document.getElementById("close");
var currentIndex;

for (var i=0; i<imgs.length; i++)
{
    imgs[i].addEventListener("click" , function(eventInfo)
    {
        currentIndex = imgs.indexOf(eventInfo.target);

        var imgSrc = eventInfo.target.getAttribute("src");
        lightBoxItem.style.backgroundImage = "url("+imgSrc+")";
        
        lightBoxContainer.style.display = "flex";
    })
}

function nextSlide()
{
    currentIndex ++;
    if (currentIndex == imgs.length)
    {
        currentIndex = 0;
    }
    var imgSrc2 = imgs[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage = "url("+imgSrc2+")";
}
nextBtn.addEventListener("click" , nextSlide);

function prevSlide()
{
    currentIndex --;
    if (currentIndex < 0)
    {
        currentIndex = imgs.length-1;
    }
    var imgSrc3 = imgs[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage = "url("+imgSrc3+")";
}
prevBtn.addEventListener("click" , prevSlide);

function closeSlide()
{
    lightBoxContainer.style.display = "none";
}
closeBtn.addEventListener("click" , closeSlide);

document.addEventListener("keydown" , function(eventInfo)
{
    if(eventInfo.key == "ArrowRight")
    {
        nextSlide();
    }
    else if(eventInfo.key == "ArrowLeft")
    {
        prevSlide();
    }
    else if(eventInfo.key == "Escape")
    {
        closeSlide();
    }
})
