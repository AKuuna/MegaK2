const { EventEmitter } = require('events');

class Restaurant extends EventEmitter {
    // constructor() {
    // super();

    open() {
        this.emit('open');
    };
   
    close() {
        this.emit('close');
    };

    /**
     * Stolik został zarezerowany na teraz.
     * Traktuj to jako po prostu 1 stolik mniej.
     */
    reserveTable() {
        this.emit('decTable');
    };
    
    /**
     * Odwołano rezerwację na stolik.
     * Traktuj to jako po prostu 1 stolik więcej.
     */
    cancelTableReservation() {
        this.emit('addTable');
    };

    /**
     * Ktoś wziął stolik bez rezerwacji.
     */
    takeTableWithoutReservation() {
        this.emit('decTable');
    };

    /**
     * Stolik się popsuł, odpadła noga :/
     */
    markTableAsBroken() {
        this.emit('decTable');
    };

    /**
     * Ktoś skończył jeść, czyścimy stolik i wraca do użytku.
     */
    cleanupTable() {
        this.emit('addTable');
    };
    //}
}

module.exports = {
  Restaurant,
};