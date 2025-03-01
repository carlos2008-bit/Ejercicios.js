const producto_stock = [
    {nombre: "Manzana", stock: 10},
    {nombre: "Pera", stock: 8},
    {nombre: "Naranja", stock: 12},
    {nombre: "piña", stock: 6},
    {nombre: "Banana", stock:15}
]

console.log("frutas disponibles", producto_stock);

const estudiantes = [
    { nombre: "Juan", notas: [12, 14, 10, 11, 13] },
    { nombre: "Ana", notas: [8, 9, 7, 10, 6] },
    { nombre: "Luis", notas: [15, 14, 16, 14, 15] }
  ];
  //Calcular notas de estudiantes
  // Función para calcular la nota final y determinar si aprobaron
  function calcularResultados(estudiantes) {
    return estudiantes.map(estudiante => {
      const notaFinal = estudiante.notas.reduce((a, b) => a + b, 0) / estudiante.notas.length;
      const aprobado = notaFinal > 10;
      return {
        nombre: estudiante.nombre,
        notaFinal: notaFinal.toFixed(2), // Redondear a dos decimales
        aprobado
      };
    });
  }
  
  // Calcular resultados
  const resultados = calcularResultados(estudiantes);
  console.log(resultados);

//Simulación de Cajero Automático
  class CuentaBancaria {
    constructor(numeroCuenta, saldo = 0) {
        this.numeroCuenta = numeroCuenta;
        this.saldo = saldo;
    }

    depositar(monto) {
        if (monto > 0) {
            this.saldo += monto;
            console.log(`Se depositaron $${monto} en la cuenta ${this.numeroCuenta}.`);
        } else {
            console.log("El monto a depositar debe ser mayor que cero.");
        }
    }

    retirar(monto) {
        if (monto > 0) {
            if (this.saldo >= monto) {
                this.saldo -= monto;
                console.log(`Se retiraron $${monto} de la cuenta ${this.numeroCuenta}.`);
            } else {
                console.log("Fondos insuficientes.");
            }
        } else {
            console.log("El monto a retirar debe ser mayor que cero.");
        }
    }

    mostrarSaldo() {
        console.log(`Saldo actual de la cuenta ${this.numeroCuenta}: $${this.saldo}`);
    }
}

class CajeroAutomatico {
    constructor() {
        this.cuentas = {}; // Objeto para almacenar las cuentas bancarias
    }

    crearCuenta(numeroCuenta, saldo = 0) {
        if (!(numeroCuenta in this.cuentas)) {
            this.cuentas[numeroCuenta] = new CuentaBancaria(numeroCuenta, saldo);
            console.log(`Cuenta ${numeroCuenta} creada con éxito.`);
        } else {
            console.log("Ya existe una cuenta con ese número.");
        }
    }

    depositarDinero(numeroCuenta, monto) {
        if (numeroCuenta in this.cuentas) {
            this.cuentas[numeroCuenta].depositar(monto);
        } else {
            console.log("No se encontró la cuenta.");
        }
    }

    retirarDinero(numeroCuenta, monto) {
        if (numeroCuenta in this.cuentas) {
            this.cuentas[numeroCuenta].retirar(monto);
        } else {
            console.log("No se encontró la cuenta.");
        }
    }

    mostrarCuenta(numeroCuenta) {
        if (numeroCuenta in this.cuentas) {
            this.cuentas[numeroCuenta].mostrarSaldo();
        } else {
            console.log("No se encontró la cuenta.");
        }
    }

    mostrarTodasCuentas() {
        for (const cuenta in this.cuentas) {
            this.cuentas[cuenta].mostrarSaldo();
        }
    }
}

// Ejemplo de uso
const cajero = new CajeroAutomatico();

// Simulación de interacción con el cajero
cajero.crearCuenta("12345", 1000);
cajero.mostrarCuenta("12345");
cajero.depositarDinero("12345", 500);
cajero.mostrarCuenta("12345");
cajero.retirarDinero("12345", 200);
cajero.mostrarCuenta("12345");
cajero.retirarDinero("12345", 2000); // Fondos insuficientes
cajero.mostrarCuenta("12345");


//Sistema de Autenticación
class  SistemaAutenticacion {
    constructor() {

this.usuarios = 
   
    {  "HectorRamon" : "1234" },
    {  "JuanCruz" : "2345" },
    {  "RaulSanchez" : "3456" },
    {  "AnaMu" : "4567" },
    {  "DianaRuiz" : "5678" }
   
};

    autenticar(usuario, password) {

        if (usuario in this.usuarios && this.usuarios[usuario] === password) {
            return "Acceso permitido";
        } else {
            return "Acceso denegado";
        }
    }
}

const sistema = new SistemaAutenticacion();

// Simulación de intentos de login
console.log(sistema.autenticar("HectorRamon", "1234")); // Acceso permitido
console.log(sistema.autenticar("JuanCruz", "2345")); // Acceso permitido
console.log(sistema.autenticar("RaulSanchez", "3456")); // Acceso permitido
console.log(sistema.autenticar("usuario3", "clave123")); // Acceso denegado (usuario no existe)
console.log(sistema.autenticar("AnaMu", "incorrecta")); // Acceso denegado (contraseña incorrecta)