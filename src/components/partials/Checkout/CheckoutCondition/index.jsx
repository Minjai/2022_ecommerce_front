import { useCheckoutButtons } from '../../../../hooks/useCheckoutButtons';
import CheckoutButtons from '../../../elements/UI/CheckoutButtons';
import { axiosInstance } from '../../../../constants/axios';
import { paths } from '../../../../constants/paths';
import { IoCheckmarkSharp } from 'react-icons/io5';
import cls from './checkoutCondition.module.scss';
import { useState } from 'react';

const CheckoutCondition = () => {
  const [state, setState] = useState({
    medication: false,
    medicationMessage: '',
    drug: false,
    drugMessage: '',
    treatments: false,
    treatmentsMessage: '',
    gender: '',
    smoke: '',
    drink: '',
    physicianName: '',
    physicianNumber: '',
    dateOfBirth: '',
    file: '',
  });

  const { backBtnHandler, nextBtnhandler } = useCheckoutButtons(
    `/${paths.CHECK_OUT}/${paths.CHECK_OUT_SECOND}`
  );

  const conditionHandler = async () => {
    try {
      const response = await axiosInstance.post('orders/medical_conditions/', {
        drug_allergies: state.drug ? 'None' : state.drugMessage,
        current_medications: state.medication
          ? 'None'
          : state.medicationMessage,
        current_treatments: state.treatments
          ? 'None'
          : state.treatmentsMessage,
        gender: state.gender,
        date_of_birth: state.dateOfBirth,
        drink: state.drink,
        smoke: state.smoke,
        primary_name: state.physicianName,
        primary_phone_number: state.physicianNumber,
        prescription: state.file
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        }
      });

      console.log(response);
    } catch (error) {
      console.log(error.response);
    }

    nextBtnhandler();
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
              className={cls[state.drug ? 'active' : '']}
              onClick={() =>
                setState((prev) => ({ ...prev, drug: !prev.drug }))
              }
            >
              <b>
                <IoCheckmarkSharp />
              </b>
              None
            </span>
            {!state.drug && (
              <textarea
                placeholder="This field is required"
                name="feedback"
                onChange={(e) =>
                  setState((prev) => ({
                    ...prev,
                    medicationMessage: e.target.value,
                  }))
                }
                value={state.medicationMessage}
              ></textarea>
            )}
            <b className={cls[!state.drug && 'appear']}>
              * This field is required
            </b>
          </div>
          <div className={cls['condition__field']}>
            <p>
              Current Medications: <sup>*</sup>
            </p>
            <span
              className={cls[state.medication ? 'active' : '']}
              onClick={() =>
                setState((prev) => ({ ...prev, medication: !prev.medication }))
              }
            >
              <b>
                <IoCheckmarkSharp />
              </b>
              None
            </span>
            {!state.medication && (
              <textarea
                placeholder="This field is required"
                name="feedback"
                onChange={(e) =>
                  setState((prev) => ({ ...prev, drugMessage: e.target.value }))
                }
                value={state.drugMessage}
              ></textarea>
            )}
            <b>* This field is required</b>
          </div>
          <div className={cls['condition__field']}>
            <p>
              Current Treatments: <sup>*</sup>
            </p>
            <span
              className={cls[state.treatments ? 'active' : '']}
              onClick={() =>
                setState((prev) => ({ ...prev, treatments: !prev.treatments }))
              }
            >
              <b>
                <IoCheckmarkSharp />
              </b>
              None
            </span>
            {!state.treatments && (
              <textarea
                placeholder="This field is required"
                name="feedback"
                onChange={(e) =>
                  setState((prev) => ({
                    ...prev,
                    treatmentsMessage: e.target.value,
                  }))
                }
                value={state.treatmentsMessage}
              ></textarea>
            )}
            <b>* This field is required</b>
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
              <b className={cls['appear']}>* This field is required</b>
            </div>
            <div id={cls['block']} className={cls['condition__field']}>
              <p>
                Date of Birth: <sup>*</sup>
              </p>
              <input
                value={state.dateOfBirth}
                onChange={(e) =>
                  setState((prev) => ({ ...prev, dateOfBirth: e.target.value }))
                }
                type="text"
                placeholder="YYYY-MM-DD"
              />
              <b className={cls['appear']}>* This field is required</b>
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
                setState((prev) => ({ ...prev, physicianName: e.target.value }))
              }
              value={state.physicianName}
              placeholder="Primary Physician’s Name"
            />
            <input
              type="text"
              onChange={(e) =>
                setState((prev) => ({
                  ...prev,
                  physicianNumber: e.target.value,
                }))
              }
              value={state.physicianNumber}
              placeholder="Physician’s Phone Number"
            />
          </div>
          <p>Please upload your prescription here (optional)</p>
          <label className={cls['input-file']}>
            <input
              onChange={(e) =>
                setState((prev) => ({ ...prev, file: e.target.files[0] }))
              }
              type="file"
              name="file"
            />
            <span className={cls['input-file-btn']}>Select a file</span>
            <span className={cls['input-file-text']}>
              {state.file ? state.file.name : 'File is not selected yet'}
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
