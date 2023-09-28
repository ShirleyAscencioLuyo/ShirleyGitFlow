var Singleton = (function () {
    var instance;

    function createInstance() {
        
        return {
            someProperty: "Ejemplo de propiedad en Singleton",
            someMethod: function () {
                console.log("Ejemplo de método en Singleton");
            }
        };
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

// Uso del Singleton
var singletonInstance1 = Singleton.getInstance();
var singletonInstance2 = Singleton.getInstance();

console.log(singletonInstance1 === singletonInstance2); 

singletonInstance1.someMethod(); 