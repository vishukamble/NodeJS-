/**
 * Created by VIshu on 12/25/2015.
 */
function takeOrders(orderNum)
{
    console.log('Order Number: ', orderNum);
    cookAndDeliver(function()
    {
      console.log('Delivered food of order no.: ', orderNum);
    });
}

//simulate 5 second time interval
function cookAndDeliver(callback)
{
    setTimeout(callback,5000);
}

//Give orders
takeOrders(1);
takeOrders(2);
takeOrders(3);
takeOrders(4);
takeOrders(5);