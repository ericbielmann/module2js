(function () {
  var Osde = function () {
      this.orders = [
          {orderId: 1, description: 'Ibupirac', active: true, approved: true, pendingPayments: true, username: 'admin'},
          {orderId: 2, description: 'Diclofenac', active: true, approved: false, pendingPayments: false, username: 'ebielmann'}
      ];
  }

  Osde.prototype.hasPendingPayments = function (username) {
      var orderId = 0;
      var pending = false;
      var active = false;
      var approved = false;
      for (var i = 0, l = this.orders.length; i < l; i++) {
          if (this.orders[i].username === username) {
              orderId = this.orders[i].orderId;
              pending = this.orders[i].pendingPayments;
          }
      }
      if (pending) {
          alert('User has pending payments');
      } else {
          active = this.isActiveOrder(orderId);
          approved = this.isApprovedOrder(orderId);

          if(active && approved) {
              alert('Deliver medicines')
          } else {
              if(!active) {
                  alert('There is no active order');
              }
              if(!approved) {
                  alert('The order is not approved yet');
              }
          }
      }
  }

  Osde.prototype.isActiveOrder = function (orderId) {
      var active = false;
      for (var i = 0, l = this.orders.length; i < l; i++) {
          if (this.orders[i].orderId === orderId) {
              active = this.orders[i].active;
          }
      }
      return active;
  }

  Osde.prototype.isApprovedOrder = function (orderId) {
      var approved = false;
      for (var i = 0, l = this.orders.length; i < l; i++) {
          if (this.orders[i].orderId === orderId) {
              approved = this.orders[i].approved;
          }
      }
      return approved;
  }

  var osde = new Osde();
  osde.hasPendingPayments('ebielmann');

}());