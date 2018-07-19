(function () {
  var Fiat = function () {
      this.clients = [{ id: 1, dni: 35447687, username: 'ebielmann' }, { id: 2, dni: 34685755, username: 'admin' }];
      this.draws = [
          {id: 1, clientDni: 35447687, description: 'July 2018', drawDate: Date.now()},
          {id: 2, clientDni: 34685755, description: 'June 2018', drawDate: new Date(2018, 5)}
      ];
      this.bids = [
          {id: 1, clientDni: 35447687, description: 'July 2018', bidDate: Date.now()},
          {id: 2, clientDni: 34685755, description: 'June 2018', bidDate: new Date(2018, 5)}
      ];
  }

  Fiat.prototype.isValidClient = function (dni) {
      for (var i = 0, l = this.clients.length; i < l; i++) {
          if (this.clients[i].dni === dni) {
              return true;
          }
      }
      return false;
  }

  Fiat.prototype.isDrawWinner = function (dni) {
      for (var i = 0, l = this.draws.length; i < l; i++) {
          var drawDate = new Date(this.draws[i].drawDate);
          var currentDate = new Date(Date.now());
          if (this.draws[i].clientDni === dni && drawDate.getMonth() == currentDate.getMonth()
              && drawDate.getFullYear() == currentDate.getFullYear()) {
              return true;
          }
      }
      return false;
  }

  Fiat.prototype.isBidWinner = function (dni) {
      for (var i = 0, l = this.bids.length; i < l; i++) {
          var bidDate = new Date(this.bids[i].bidDate);
          var currentDate = new Date(Date.now());
          if (this.bids[i].clientDni === dni && bidDate.getMonth() == currentDate.getMonth()
              && bidDate.getFullYear() == currentDate.getFullYear()) {
              return true;
          }
      }
      return false;
  }

  Fiat.prototype.checkUserCarStatus = function(dni) {
      var isClient = this.isValidClient(dni);
      if(isClient) {
          if(this.isDrawWinner(dni) || this.isBidWinner(dni)) {
              alert('Deliver New Car!');
          } else {
              alert('Let´s try next month.');
          }
      } else {
          alert('User is not a Client.')
      }
  }

  var fiat = new Fiat();
  fiat.checkUserCarStatus(35447687);

}());