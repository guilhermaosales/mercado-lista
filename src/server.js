const app = require('./app');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`mercado-lista server is listening at http://localhost:${PORT}`);
});
