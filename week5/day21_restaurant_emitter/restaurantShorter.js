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
        this.emit('changeTableNumber', -1);
    };
    
    /**
     * Odwołano rezerwację na stolik.
     * Traktuj to jako po prostu 1 stolik więcej.
     */
    cancelTableReservation() {
        this.emit('changeTableNumber', 1);
    };

    /**
     * Ktoś wziął stolik bez rezerwacji.
     */
    takeTableWithoutReservation() {
        this.emit('changeTableNumber', -1);
    };

    /**
     * Stolik się popsuł, odpadła noga :/
     */
    markTableAsBroken() {
        this.emit('changeTableNumber', -1);
    };

    /**
     * Ktoś skończył jeść, czyścimy stolik i wraca do użytku.
     */
    cleanupTable() {
        this.emit('changeTableNumber', 1);
    };
    //}
}

module.exports = {
  Restaurant,
};