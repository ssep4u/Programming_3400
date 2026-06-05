# Programming 소스 코드 🥱

## 02_counter

vanilla HTML, JavaScript

## React 시작 🦥

```shell
npm create vite@latest .
```

### CounterApp 😴

- `useState(초기값)`
- `onClick={() => set함수(바꿀값)}`
- `onClick={() => set함수((이전state) => 이전state + 1)}`
- `onClick={함수이름}`

### TodoListApp 🧂

- React Component 분리
- for -> htmlFor, class -> className
- props
- `<input id={id} value={} />`, `<label htmlFor={id} />`
- onChange
- 구조 분해 할당
- `...스프레드연산자`
- `<form onSubmit={} />`
- `map()`
- `<TodoItem key={} />`
- `const handleEvent = (event) => {}`
- `{조건식 ? 참 : 거짓}`
- `{조건식 && 참}`, `{!조건식 && 거짓}`
- onKeyDown
- LocalStorage, `useEffect(명령어, [변할값])`
- `style={{}}`
- HomeApp: state를 이용해서 다른 컴포넌트 표시하자
- `npm install react-router-dom`
- ```javascript
    <BrowserRouter>
        <Routes>
            <Route path="/" element={} />
        </Routes>
    </BrowserRouter>
  ```
- ```javascript
  <Link to="/"></Link>
  ```
- `useNavigate()`
- 3403 민정원 2-11 ★★ boolean 값, 정렬 로직
- 3401 강서현 1-2 배경색 ★ useState, CSS class/style 변경
