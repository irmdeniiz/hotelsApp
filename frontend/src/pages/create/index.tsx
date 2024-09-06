import { Field, Form, Formik } from "formik";
import Container from "../../components/container";
import { initial, inputs } from "../../constants";
import { PlaceData } from "../../types";

const Create = () => {
  const handleSubmit = (values: PlaceData) => {
    const body = { ...values };

    body.amenities = (values.amenities as string).split(",");

    console.log(body);
  };

  return (
    <Container>
      <Formik initialValues={initial} onSubmit={handleSubmit}>
        <Form className="max-w-2xl mx-auto grid gap-5">
          {inputs.map((item) => (
            <div className="flex flex-col gap-3">
              <label className="font-bold">{item.label}</label>
              <Field
                type={item.type || "text"}
                name={item.name}
                className="border py-1 px-4 rounded-md shadow w-full"
              />
            </div>
          ))}

          <button
            className="my-5 bg-blue-500 py-2 px-6 text-white font-bold rounded-md transition hover:bg-blue-600"
            type="submit"
          >
            Gönder
          </button>
        </Form>
      </Formik>
    </Container>
  );
};

export default Create;
