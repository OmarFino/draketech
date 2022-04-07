const repo = require('./repository');

const getProduct = async (req, res) => {
  try {
    const { idUSer } = req.params
    const data = await repo.getProduct(idUSer);
    res.status(200).send(data);
  } catch (error) {
    res.send(error);
  }
};

const postProduct = async (req, res) => {
  try {
    const {
      nameProduct,
      priceProduct,
      imageProduct,
      idUser
    } = req.body;

    const data = await repo.postProduct(
      nameProduct,
      priceProduct,
      imageProduct,
      idUser
    );
    if (data != "") {
      res.status(200).send({ message: 'Transacción Exitosa, se agrego un nuevo producto' });
    } else {
      res.status(500).send({ message: data.sqlMessage });
    }
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

const putProduct = async (req, res) => {
  try {
    const {
      nameProduct,
      priceProduct,
      imageProduct,
      idProduct
    } = req.body;

    const data = await repo.putProduct(
      nameProduct,
      priceProduct,
      imageProduct,
      idProduct
    );
    if (data != "") {
      res.status(200).send({ message: 'Transacción Exitosa, producto actualizado correctamente' });
    } else {
      res.status(500).send({ message: data.sqlMessage });
    }
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const {
      idProduct
    } = req.params;

    const data = await repo.deleteProduct(
      idProduct
    );
    if (data != "") {
      res.status(200).send({ message: 'Transacción Exitosa, se ha eliminado el producto' });
    } else {
      res.status(500).send({ message: data.sqlMessage });
    }
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

module.exports = { getProduct, postProduct, putProduct, deleteProduct };
