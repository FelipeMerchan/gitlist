function User({ children, name }) {
  return (
    <div>
      <p>Hola, mi nombre es {name}</p>
      {children}
    </div>
  )
}

export default User