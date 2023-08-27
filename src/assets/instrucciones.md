[Ir al proyecto](https://github.com/iLuisOlivares/Super_Heroes-API_REST)

# Super_Heroes-API_REST

API REST que contiene informacion de los principales super heroes y villanos de los universo de Comics de DC y Marvel.

## 🚀 Run Locally

---

#### 1. Download the project

Clone the project

```bash
  git clone https://github.com/iLuisOlivares/Super_Heroes-API_REST
```

Go to the project directory

```bash
  cd Super_Heroes-API_REST
```

#### 2. Install virtual environment

```bash
  sudo apt install python3-venv
```

Create virtual environment

**On Ubuntu**

```bash
  virtualenv -p python3 env
```

**On Manjaro**

```bash
  python -m venv env
```

Activate virtual environment

```bash
  source env/bin/activate
```

#### 3. Install dependencies

```bash
  pip install -r requirements.txt
```

#### 4. Start the server

```bash
  cd super_hero_API/
```

```bash
  python manage.py runserver
```

Go to for example - http://127.0.0.1:8000/api/superheroes/

## 🔵 API Reference

---

In localhost: http://127.0.0.1:8000/ API_REFERENCE

### 🦸 Super Heroes

---

#### Get all Heroes

```http
  GET /api/superheroes
```

#### Post a Hero

```http
  POST /api/superheroes/
```

#### Get a Hero by name

```http
  GET /api/superheroes/${name}
```

#### Get, Put and Delete a Hero by id

```http
  GET | PUT | DELETE  /api/superheroes/${id}
```

### 🦹 Super Villain

---

#### Get all Villains

```http
  GET /api/supervillain
```

#### Post a Villain

```http
  POST /api/supervillain/
```

#### Get a Vilain by name

```http
  GET /api/supervillain/${name}
```

#### Get, Put and Delete a Villain by id

```http
  GET | PUT | DELETE  /api/supervillain/${id}
```

### 🌇 Locations

---

#### Get all Locations

```http
  GET /api/locations
```

#### Post a Location

```http
  POST /api/locations/
```

#### Get a Location by name

```http
  GET /api/locations/${name}
```

#### Get, Put and Delete a Location by id

```http
  GET | PUT | DELETE  /api/locations/${id}
```

---

##### Se utilizo la libreria retrying para usar el patron retry

## 👨‍💻 Authors

- [@iLuisOlivares](https://www.github.com/iluisolivares)
