'use client'
import { useState } from 'react'

import { styled } from '@mui/material/styles'
import getClassPrefixer from '~/app/UI/classPrefixer'
import { Button } from '@mui/material'

import { Formik, Form, Field, useFormikContext } from 'formik'
import * as Yup from 'yup'
import TextField from '~/app/UI/Shared/FormikTextField'
import SelectField from '~/app/UI/Shared/FormikSelect'



const displayName = 'Home'
const classes = getClassPrefixer(displayName)
const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  padding: '8rem',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  gap: '2rem',
  '@media (max-width: 768px)': {
    padding: '15rem 1rem',
  },
  [`& .${classes.formContainer}`]: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '2rem',
    border: `solid 3px ${theme.palette.primary.main}`,
    background: theme.palette.background.modal,
    borderRadius: '1rem',
    padding: '3rem',
  },
  [`& .${classes.input}`]: {
    width: '200px',
  },
  [`& .${classes.btnContainer}`]: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  [`& .${classes.logContainer}`]: {
    minWidth: '300px',
    maxWidth: '400px',
    background: theme.palette.background.paper,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '1rem',
    padding: '1.5rem',
    minHeight: '200px',
    maxHeight: '70vh',
    overflowY: 'auto',
    fontFamily: 'monospace',
    fontSize: '0.95rem',
    color: theme.palette.text.primary,
    boxShadow: theme.shadows[1],
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  [`& .${classes.logTitle}`]: {
    fontWeight: 600,
    marginBottom: '0.5rem',
    color: theme.palette.primary.main,
  },
  [`& .${classes.logList}`]: {
    paddingLeft: '1.2em',
    margin: 0,
    listStyle: 'disc',
  },
  [`& .${classes.logEmpty}`]: {
    color: theme.palette.text.disabled,
    fontStyle: 'italic',
  },
}))

const Home = ({
  log,
  setLog,
}) => {
  const { isValid, dirty } = useFormikContext()
  return (
    <Container>
      <div className={classes.formContainer}>
        <Field
          name="name"
          component={TextField}
          color="primary"
          placeholder="Name"
          type="text"
          label="name"
          variant="outlined"
          setLog={setLog}
          className={classes.input}
        />
        <Field
          name="age"
          component={TextField}
          color="primary"
          placeholder="Age"
          type="number"
          label="age"
          variant="outlined"
          setLog={setLog}
          className={classes.input}
        />
        <Field
          name="dateOfBirth"
          component={TextField}
          color="primary"
          placeholder="Date of Birth"
          type="date"
          label="Date of Birth"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          setLog={setLog}
          className={classes.input}
        />
        <Field
          name="gender"
          label="Gender"
          options={[
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
            { value: 'other', label: 'Other' },
          ]}
          setLog={setLog}
          component={SelectField}
        />
        <div>
          <Button
            type="submit"
            variant="contained"
            disabled={!isValid || !dirty}
          >
            Submit
          </Button>
        </div>
      </div>
      <div className={classes.logContainer}>
        <span className={classes.logTitle}>Logs:</span>
        <div>
          {log.length === 0 ? (
            <div className={classes.logEmpty}>No logs yet</div>
          ) : (
            log.map((entry, idx) => (
              <div key={idx} style={{ marginBottom: 4 }}>
                {entry}
              </div>
            ))
          )}
        </div>
      </div>
    </Container>
  )
}

const Wrapper = () => {
  const [log, setLog] = useState([])
  const initialValues = {
    name: '',
    age: '',
    dateOfBirth: '',
    gender: '',
  }

  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Name is required'),
    age: Yup.number()
      .typeError('Age must be a number')
      .required('Age is required')
      .positive('Age must be positive')
      .integer('Age must be an integer'),
    dateOfBirth: Yup.date()
      .typeError('Please enter a valid date')
      .required('Date of Birth is required'),
    gender: Yup.string()
      .required('Gender is required')
  })

  const onSubmit = (values, { resetForm }) => {
    const date = new Date().toLocaleString()
    setLog([
      ...log,
      `[${date}] onClick:`,
      ...Object.entries(values).map(
        ([key, value]) => `   • ${key}: ${value === '' ? '(empty)' : value}`
      ),
    ])
    resetForm()
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <Home
          log={log}
          setLog={setLog}
        />
      </Form>
    </Formik>
  )
}

export default Wrapper