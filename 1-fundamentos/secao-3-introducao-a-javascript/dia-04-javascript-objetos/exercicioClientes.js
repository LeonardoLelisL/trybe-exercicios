let order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

function customerInfo(order) {
  let deliveryPerson = order.order.delivery.deliveryPerson;
  let name = order.name;
  let phone = order.phoneNumber;
  let street = order.address.street;
  let number = order.address.number;
  let apartment = order.address.apartment;
  console.log('Olá, ' + deliveryPerson + ', entrega para: ' + name + ', Telefone: ' + phone + ', R. ' + street 
  + ', Nº: ' + number + ', AP: ' + apartment);
}

customerInfo(order);

function orderModifier(order) {
let newName = order.name = 'Luiz Silva';
let newPayment = order.payment.total = 50;
let pizzas = Object.keys(order.order.pizza);
let drinks = Object.values(order.order.drinks.coke)[0];
console.log('Olá, ' + newName + ', o valor total de seu pedido de ' + pizzas[0] + ', ' + pizzas[1] + ' e ' + 
drinks + ' é R$ ' + newPayment + ',00.');
}

orderModifier(order);
