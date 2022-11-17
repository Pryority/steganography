import Link from "next/link";
import Head from "next/head";
import { Layout } from "../components";


export default function Step1() {
  return (
    <div className={""}>
      <Layout className={""}>
        <div>
          TITLE
          <input
            value={formData.title}
            onChange={(e) => {
              const newValue = e.target.value;

              setFormData({
                ...formData,
                title: newValue,
              });
            }}
          />
          <button onClick={() => setCurrentStep(1)} disabled={!formData.title}>
            NEXT
          </button>
        </div>
      </Layout>
    </div>
  );
}
