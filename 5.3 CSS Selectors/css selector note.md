# element selector
```
h1 {
    color: blue
  }
```

# Class selector
```
.red-heading {
  color: red
}
```
<h1 class="red-heading">Red</h1>
<h2>Green</h2>
<h3>Blue</h3>

- to be used to many tags as many as we want

# Universal selector
```
* {
  text-align: center
}
```

# Id selector
```
#main {
  color: red;
}
```

<h1 id="main">Red</h1>
<h2>Green</h2>
<h3>Blue</h3>

- Should only be apply to one element

# Attribute selector
- 2 ways to use it
## 1
```
p[draggable]{
  color:red
}
```
## 2
```
p[draggable="false"]{
  color:red;
}
```

<p draggable="true">Drag me</p>
<p>Don't drag me</p>
<p draggable="false">Don't drag me</p>



