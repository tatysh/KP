const Table = () => {
    return<table class="table">
    <thead>
      <tr>
        <th scope="col">Имя</th>
        <th scope="col">Качество</th>
        <th scope="col">Профессия</th>
        <th scope="col">Встретились раз</th>
        <th scope="col">Оценка</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td colspan="2">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
}