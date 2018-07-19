(function () {
  var Security = function () {
      this.users = ['ebielmann', 'admin'];
      this.activeOrders = [{ id: 1, username: 'ebielmann' }, { id: 2, username: 'admin' }];
      this.orderDetails = [
          {id: 1, orderId: 1, description: 'PS4', orderDate: Date.now(), approvedBy: 'admin', status: 'complete'},
          {id: 2, orderId: 1, description: 'Joistick', orderDate: Date.now(), approvedBy: 'admin', status: 'complete'}
      ];
  }

  Security.prototype.isAuthorized = function (username) {
      if (this.users.indexOf(username) != -1) {
          this.getActiveOrder(username);
      } else {
          alert('User is not authorized');
      }
  }

  Security.prototype.getActiveOrder = function (username) {
      var orderId = 0;
      for (var i = 0, l = this.activeOrders.length; i < l; i++) {
          if (this.activeOrders[i].username === username) {
              orderId = this.activeOrders[i].id;
          }
      }
      if (orderId !== 0) {
          this.getOrderDetails(orderId);
      } else {
          alert('There is no active order');
      }
  }

  Security.prototype.getOrderDetails = function (orderId) {
      var orderDetails = [];
      for (var i = 0, l = this.orderDetails.length; i < l; i++) {
          if (this.orderDetails[i].orderId === orderId) {
              orderDetails.push(this.orderDetails[i]);
          }
      }
      if (orderDetails.length > 0) {
          var text = '';
          for (var i = 0, l = orderDetails.length; i < l; i++) {
              text += orderDetails[i].description + ' ' + orderDetails[i].orderDate + ' ' + orderDetails[i].approvedBy + ' ' + orderDetails[i].status;
              if(i !== l - 1) {
                  text += '\n';
              }
          }
          alert(text);
      }
  }

  var sec = new Security();
  sec.isAuthorized('ebielmann');

}());