const servicesBoxText = document.getElementById('services-content').children;


function toggleServicesPageMobileView(x) {
    if (x.matches) {
        servicesBoxText[2].innerHTML = '';
        servicesBoxText[3].innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet assumenda voluptatum culpa officia numquam non vitae veritatis neque. Est vero sit quos vel nostrum ex ipsam exercitationem, nemo quia aliquid!";
        servicesBoxText[6].innerHTML = '';
        servicesBoxText[7].innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, a. Veritatis obcaecati qui beatae tenetur, ipsam officiis. Quidem laudantium, recusandae id voluptatem iure, illum, animi sapiente aliquid deserunt sunt ipsa!";
    } else {
        servicesBoxText[3].innerHTML = '';
        servicesBoxText[2].innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet assumenda voluptatum culpa officia numquam non vitae veritatis neque. Est vero sit quos vel nostrum ex ipsam exercitationem, nemo quia aliquid!";
        servicesBoxText[7].innerHTML = '';
        servicesBoxText[6].innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, a. Veritatis obcaecati qui beatae tenetur, ipsam officiis. Quidem laudantium, recusandae id voluptatem iure, illum, animi sapiente aliquid deserunt sunt ipsa!";
        
    }
}

var x = window.matchMedia("(max-width: 898px)")
toggleServicesPageMobileView(x)
x.addListener(toggleServicesPageMobileView)