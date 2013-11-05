$(function(){
    renderPizza1(com.dawgpizza.menu.pizzas, $('.pizza-template'), $('.menu-data1'));
    renderPizza2(com.dawgpizza.menu.pizzas, $('.pizza2-template'), $('.menu-data4'));
    renderDrink(com.dawgpizza.menu.drinks, $('.drink-template'), $('.menu-data2'));
    renderDessert(com.dawgpizza.menu.desserts, $('.dessert-template'), $('.menu-data3'));
})

function renderPizza1(pizzas, template, menuData) {
    var instance;
    var idx;
    var pizza;

    for(idx = 0; idx < com.dawgpizza.menu.pizzas.length/2; ++idx) {
        instance = template.clone();
        pizza = com.dawgpizza.menu.pizzas[idx];
        instance.find('.name').html(pizza.name);
        instance.find('.description').html(pizza.description);
        instance.find('.price').html('$' + pizza.prices[0] + '/' + '$' + pizza.prices[1]
            + '/' + '$' + pizza.prices[2]);
        instance.removeClass('template');
        menuData.append(instance);
    }
} 

function renderPizza2(pizzas, template, menuData) {
    for(idx = com.dawgpizza.menu.pizzas.length/2; idx < com.dawgpizza.menu.pizzas.length; ++idx) {
        instance = template.clone();
        pizza = com.dawgpizza.menu.pizzas[idx];
        instance.find('.name').html(pizza.name);
        instance.find('.description').html(pizza.description);
        instance.find('.price').html('$' + pizza.prices[0] + '/' + '$' + pizza.prices[1]
            + '/' + '$' + pizza.prices[2]);
        instance.removeClass('template');
        menuData.append(instance);
    }
}
