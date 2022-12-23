import { useCheckoutButtons } from '../../../../hooks/useCheckoutButtons';
import CheckoutButtons from '../../../elements/UI/CheckoutButtons';
import { axiosInstance } from '../../../../constants/axios';
import { paths } from '../../../../constants/paths';
import { IoCheckmarkSharp } from 'react-icons/io5';
import cls from './checkoutCondition.module.scss';
import { useState } from 'react';

const CheckoutCondition = () => {
  const [state, setState] = useState({
    current_medications: '',
    drug_allergies: '',
    current_treatments: '',
    gender: '',
    smoke: '',
    drink: '',
    primary_name: '',
    primary_phone_number: '',
    date_of_birth: '',
  });

  const { backBtnHandler, nextBtnhandler } = useCheckoutButtons(
    `/${paths.CHECK_OUT}/${paths.CHECK_OUT_SECOND}`
  );

  const conditionHandler = async () => {
    const formData = new FormData();

    formData.append('primary_name', state.primary_name)
    formData.append('primary_phone_number', state.primary_phone_number)
    formData.append('drink', state.drink)
    formData.append('date_of_birth', state.date_of_birth)
    formData.append('prescription', state.prescription)
    formData.append('smoke', state.smoke)
    formData.append('gender', state.gender)
    formData.append('current_treatments', state.current_treatments)
    formData.append('current_medications', state.current_medications)
    formData.append('drug_allergies', state.drug_allergies)

    try {
      const response = await axiosInstance.post(
        'orders/medical_conditions/',
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            'Content-type': 'multipart/form-data',
          },
        }
      );

      nextBtnhandler();
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className={cls['condition']}>
      <h3>Medical Conditions</h3>

      <div className={cls['condition-body']}>
        <div className="flex">
          <div className={cls['condition__field']}>
            <p>
              Drug Allegies: <sup>*</sup>
            </p>
            <span
              className={cls[state.drug_allergies === 'None' ? 'active' : '']}
              onClick={() =>
                setState((prev) => ({
                  ...prev,
                  drug_allergies: state.drug_allergies === 'None' ? '' : 'None',
                }))
              }
            >
              <b>
                <IoCheckmarkSharp />
              </b>
              None
            </span>
            {state.drug_allergies !== 'None' && (
              <textarea
                placeholder="This field is required"
                name="feedback"
                onChange={(e) =>
                  setState((prev) => ({
                    ...prev,
                    drug_allergies: e.target.value,
                  }))
                }
                value={state.drug_allergies}
              ></textarea>
            )}
            {!state.drug_allergies && <b>* This field is required</b>}
          </div>
          <div className={cls['condition__field']}>
            <p>
              Current Medications: <sup>*</sup>
            </p>
            <span
              className={
                cls[state.current_medications === 'None' ? 'active' : '']
              }
              onClick={() =>
                setState((prev) => ({
                  ...prev,
                  current_medications:
                    state.current_medications === 'None' ? '' : 'None',
                }))
              }
            >
              <b>
                <IoCheckmarkSharp />
              </b>
              None
            </span>
            {state.current_medications !== 'None' && (
              <textarea
                placeholder="This field is required"
                name="feedback"
                onChange={(e) =>
                  setState((prev) => ({
                    ...prev,
                    current_medications: e.target.value,
                  }))
                }
                value={state.current_medications}
              ></textarea>
            )}
          </div>
          <div className={cls['condition__field']}>
            <p>
              Current Treatments: <sup>*</sup>
            </p>
            <span
              className={
                cls[state.current_treatments === 'None' ? 'active' : '']
              }
              onClick={() =>
                setState((prev) => ({
                  ...prev,
                  current_treatments:
                    state.current_treatments === 'None' ? '' : 'None',
                }))
              }
            >
              <b>
                <IoCheckmarkSharp />
              </b>
              None
            </span>
            {state.current_treatments !== 'None' && (
              <textarea
                placeholder="This field is required"
                name="feedback"
                onChange={(e) =>
                  setState((prev) => ({
                    ...prev,
                    current_treatments: e.target.value,
                  }))
                }
                value={state.current_treatments}
              ></textarea>
            )}
            {!state.current_treatments && <b>* This field is required</b>}
          </div>
          <div className={`flex ${cls['condition__child']}`}>
            <div id={cls['block']} className={cls['condition__field']}>
              <p>
                Gender: <sup>*</sup>
              </p>
              <label>
                <span
                  onClick={() =>
                    setState((prev) => ({ ...prev, gender: 'Male' }))
                  }
                  className={cls[state.gender === 'Male' ? 'active' : '']}
                >
                  Male
                </span>
                <span
                  onClick={() =>
                    setState((prev) => ({ ...prev, gender: 'Female' }))
                  }
                  className={cls[state.gender === 'Female' ? 'active' : '']}
                >
                  Female
                </span>
              </label>
              {!state.gender && <b>* This field is required</b>}
            </div>
            <div id={cls['block']} className={cls['condition__field']}>
              <p>
                Date of Birth: <sup>*</sup>
              </p>
              <input
                value={state.date_of_birth}
                onChange={(e) =>
                  setState((prev) => ({ ...prev, date_of_birth: e.target.value }))
                }
                type="text"
                placeholder="YYYY-MM-DD"
              />
              {!state.date_of_birth && <b>* This field is required</b>}
            </div>
          </div>
          <div id={cls['block']} className={cls['condition__field']}>
            <p>Do you smoke:</p>
            <label className={cls['span-margin']}>
              <span
                onClick={() => setState((prev) => ({ ...prev, smoke: 'No' }))}
                className={cls[state.smoke === 'No' ? 'active' : '']}
              >
                No
              </span>
              <span
                onClick={() => setState((prev) => ({ ...prev, smoke: 'Yes' }))}
                className={cls[state.smoke === 'Yes' ? 'active' : '']}
              >
                Yes
              </span>
            </label>
          </div>
          <div id={cls['block']} className={cls['condition__field']}>
            <p>Do you drink:</p>
            <label>
              <span
                onClick={() => setState((prev) => ({ ...prev, drink: 'No' }))}
                className={cls[state.drink === 'No' ? 'active' : '']}
              >
                No
              </span>
              <span
                onClick={() => setState((prev) => ({ ...prev, drink: 'Yes' }))}
                className={cls[state.drink === 'Yes' ? 'active' : '']}
              >
                Yes
              </span>
            </label>
          </div>
        </div>
        <div className={cls['condition-footer']}>
          <p>Medical history added to your order (optional)</p>
          <div className="flex">
            <input
              type="text"
              onChange={(e) =>
                setState((prev) => ({ ...prev, primary_name: e.target.value }))
              }
              value={state.primary_name}
              placeholder="Primary Physician’s Name"
            />
            <input
              type="text"
              onChange={(e) =>
                setState((prev) => ({
                  ...prev,
                  primary_phone_number: e.target.value,
                }))
              }
              value={state.primary_phone_number}
              placeholder="Physician’s Phone Number"
            />
          </div>
          <p>Please upload your prescription here (optional)</p>
          <label className={cls['input-file']}>
            <input
              onChange={(e) =>
                setState((prev) => ({
                  ...prev,
                  prescription: e.target.files[0],
                }))
              }
              type="file"
              name="file"
              accept="image/png, image/jpeg"
            />
            <span className={cls['input-file-btn']}>Select a file</span>
            <span className={cls['input-file-text']}>
              {state.prescription
                ? state.prescription.name
                : 'File is not selected yet'}
            </span>
          </label>
          <span>
            tesgt test test testtesgt test test testtesgt test test testtesgt
            test tesgt test test testtesgt test test testtesgt test test test
          </span>
          <span>
            I certify that I am ‘over 18 years’ and that I am under the
            supervision of a doctor. The ordered medication is for my own
            personal use and is strictly not meant for a re-sale.
          </span>
          <span>By pressing ‘Next’, I agree to the above statements.</span>
          <CheckoutButtons prev={backBtnHandler} next={conditionHandler} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutCondition;
