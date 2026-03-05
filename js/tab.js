const tabs = document.querySelectorAll(".eventTab");
const items = document.querySelectorAll(".eventItem");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    
    // remove active class from tabs
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    // hide all items
    items.forEach((item) => item.classList.remove("active"));

    // get tab id
    const tabId = tab.id;

    // show correct item
    document.getElementById(tabId + "-detail").classList.add("active");
  });
});
