# 🔐 Generador básico de claves seguras usando Fibonacci y números primos”

## 📌 Descripción

Este proyecto genera una cadena tipo “contraseña” combinando la serie de Fibonacci con conversión ASCII y detección de números primos.

Cada número generado en la secuencia de Fibonacci pasa por un filtro que decide si:

* Es primo → se deja como número
* No es primo y está en rango ASCII → se convierte a carácter
* No cumple condiciones → se mantiene como número

---

## ⚙️ Funcionamiento

### 1. Filtro (`filtrador`)

La función `filtrador(x)` hace lo siguiente:

* Cuenta cuántos divisores tiene `x`
* Si tiene exactamente 2 divisores → es primo → retorna el número
* Si no es primo:

  * Si está en rango ASCII imprimible (33 a 95 o 97 a 126) → lo convierte a carácter
  * Si no → lo deja como número

---

### 2. Generador Fibonacci (`GenerarFibo`)

Genera una secuencia Fibonacci:

* Parte de dos valores iniciales `a` y `b`
* Genera `n` iteraciones
* En cada paso:

  * Aplica `filtrador(a)`
  * Concatena el resultado en una cadena (`ver`)

---

### 3. Interfaz (`generador`)

Lee datos desde el HTML:

* `inicial`
* `secundario`
* `iteraciones`

Luego:

* Genera la cadena final
* La muestra en el elemento HTML con id `password`

---

## 🧠 Ejemplo

Si ingresas:

```
a = 1
b = 1
n = 10
```

Salida posible:

```
1A2C35G...
```

(depende de los valores ASCII generados)

---

## 🧩 Estructura del proyecto

```
/proyecto
 ├── index.html
 ├── script.js
 └── README.md
```

---

## 🚀 Uso

1. Abrir `index.html`
2. Ingresar valores:

   * inicial
   * secundario
   * iteraciones
3. Presionar botón generar
4. Ver resultado en pantalla

---

## 🛠 Tecnologías

* HTML
* CSS
* JavaScript

---

## 📌 Nota

Este proyecto es experimental y mezcla lógica matemática (Fibonacci + primos) con codificación ASCII para generar cadenas tipo “password”.
