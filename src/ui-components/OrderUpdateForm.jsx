/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextAreaField,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { Order, Customer } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function OrderUpdateForm(props) {
  const {
    id: idProp,
    order: orderModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    customerId: "",
    dateAndTime: "",
    totalAmount: "",
    status: "",
    shippingAddress: "",
    paymentMethod: "",
    discount: "",
    orderItems: "",
    customerID: undefined,
  };
  const [customerId, setCustomerId] = React.useState(initialValues.customerId);
  const [dateAndTime, setDateAndTime] = React.useState(
    initialValues.dateAndTime
  );
  const [totalAmount, setTotalAmount] = React.useState(
    initialValues.totalAmount
  );
  const [status, setStatus] = React.useState(initialValues.status);
  const [shippingAddress, setShippingAddress] = React.useState(
    initialValues.shippingAddress
  );
  const [paymentMethod, setPaymentMethod] = React.useState(
    initialValues.paymentMethod
  );
  const [discount, setDiscount] = React.useState(initialValues.discount);
  const [orderItems, setOrderItems] = React.useState(initialValues.orderItems);
  const [customerID1, setCustomerID1] = React.useState(
    initialValues.customerID
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = orderRecord
      ? { ...initialValues, ...orderRecord, customerID1 }
      : initialValues;
    setCustomerId(cleanValues.customerId);
    setDateAndTime(cleanValues.dateAndTime);
    setTotalAmount(cleanValues.totalAmount);
    setStatus(cleanValues.status);
    setShippingAddress(cleanValues.shippingAddress);
    setPaymentMethod(cleanValues.paymentMethod);
    setDiscount(cleanValues.discount);
    setOrderItems(
      typeof cleanValues.orderItems === "string"
        ? cleanValues.orderItems
        : JSON.stringify(cleanValues.orderItems)
    );
    setCustomerID1(cleanValues.customerID);
    setCurrentCustomerID1Value(undefined);
    setCurrentCustomerID1DisplayValue("");
    setErrors({});
  };
  const [orderRecord, setOrderRecord] = React.useState(orderModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Order, idProp)
        : orderModelProp;
      setOrderRecord(record);
      const customerID1Record = record ? await record.customerID1 : undefined;
      setCustomerID1(customerID1Record);
    };
    queryData();
  }, [idProp, orderModelProp]);
  React.useEffect(resetStateValues, [orderRecord, customerID1]);
  const [currentCustomerID1DisplayValue, setCurrentCustomerID1DisplayValue] =
    React.useState("");
  const [currentCustomerID1Value, setCurrentCustomerID1Value] =
    React.useState(undefined);
  const customerID1Ref = React.createRef();
  const customerRecords = useDataStoreBinding({
    type: "collection",
    model: Customer,
  }).items;
  const getDisplayValue = {
    customerID: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    customerId: [],
    dateAndTime: [],
    totalAmount: [],
    status: [],
    shippingAddress: [],
    paymentMethod: [],
    discount: [],
    orderItems: [{ type: "JSON" }],
    customerID: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          customerId,
          dateAndTime,
          totalAmount,
          status,
          shippingAddress,
          paymentMethod,
          discount,
          orderItems,
          customerID: customerID1,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          const modelFieldsToSave = {
            customerId: modelFields.customerId,
            dateAndTime: modelFields.dateAndTime,
            totalAmount: modelFields.totalAmount,
            status: modelFields.status,
            shippingAddress: modelFields.shippingAddress,
            paymentMethod: modelFields.paymentMethod,
            discount: modelFields.discount,
            customerID: modelFields.customerID,
            orderItems: modelFields.orderItems
              ? JSON.parse(modelFields.orderItems)
              : modelFields.orderItems,
          };
          await DataStore.save(
            Order.copyOf(orderRecord, (updated) => {
              Object.assign(updated, modelFieldsToSave);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "OrderUpdateForm")}
      {...rest}
    >
      <TextField
        label="Customer id"
        isRequired={false}
        isReadOnly={false}
        value={customerId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              customerId: value,
              dateAndTime,
              totalAmount,
              status,
              shippingAddress,
              paymentMethod,
              discount,
              orderItems,
              customerID: customerID1,
            };
            const result = onChange(modelFields);
            value = result?.customerId ?? value;
          }
          if (errors.customerId?.hasError) {
            runValidationTasks("customerId", value);
          }
          setCustomerId(value);
        }}
        onBlur={() => runValidationTasks("customerId", customerId)}
        errorMessage={errors.customerId?.errorMessage}
        hasError={errors.customerId?.hasError}
        {...getOverrideProps(overrides, "customerId")}
      ></TextField>
      <TextField
        label="Date and time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={dateAndTime && convertToLocal(new Date(dateAndTime))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              customerId,
              dateAndTime: value,
              totalAmount,
              status,
              shippingAddress,
              paymentMethod,
              discount,
              orderItems,
              customerID: customerID1,
            };
            const result = onChange(modelFields);
            value = result?.dateAndTime ?? value;
          }
          if (errors.dateAndTime?.hasError) {
            runValidationTasks("dateAndTime", value);
          }
          setDateAndTime(value);
        }}
        onBlur={() => runValidationTasks("dateAndTime", dateAndTime)}
        errorMessage={errors.dateAndTime?.errorMessage}
        hasError={errors.dateAndTime?.hasError}
        {...getOverrideProps(overrides, "dateAndTime")}
      ></TextField>
      <TextField
        label="Total amount"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={totalAmount}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              customerId,
              dateAndTime,
              totalAmount: value,
              status,
              shippingAddress,
              paymentMethod,
              discount,
              orderItems,
              customerID: customerID1,
            };
            const result = onChange(modelFields);
            value = result?.totalAmount ?? value;
          }
          if (errors.totalAmount?.hasError) {
            runValidationTasks("totalAmount", value);
          }
          setTotalAmount(value);
        }}
        onBlur={() => runValidationTasks("totalAmount", totalAmount)}
        errorMessage={errors.totalAmount?.errorMessage}
        hasError={errors.totalAmount?.hasError}
        {...getOverrideProps(overrides, "totalAmount")}
      ></TextField>
      <TextField
        label="Status"
        isRequired={false}
        isReadOnly={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              customerId,
              dateAndTime,
              totalAmount,
              status: value,
              shippingAddress,
              paymentMethod,
              discount,
              orderItems,
              customerID: customerID1,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      ></TextField>
      <TextField
        label="Shipping address"
        isRequired={false}
        isReadOnly={false}
        value={shippingAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              customerId,
              dateAndTime,
              totalAmount,
              status,
              shippingAddress: value,
              paymentMethod,
              discount,
              orderItems,
              customerID: customerID1,
            };
            const result = onChange(modelFields);
            value = result?.shippingAddress ?? value;
          }
          if (errors.shippingAddress?.hasError) {
            runValidationTasks("shippingAddress", value);
          }
          setShippingAddress(value);
        }}
        onBlur={() => runValidationTasks("shippingAddress", shippingAddress)}
        errorMessage={errors.shippingAddress?.errorMessage}
        hasError={errors.shippingAddress?.hasError}
        {...getOverrideProps(overrides, "shippingAddress")}
      ></TextField>
      <TextField
        label="Payment method"
        isRequired={false}
        isReadOnly={false}
        value={paymentMethod}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              customerId,
              dateAndTime,
              totalAmount,
              status,
              shippingAddress,
              paymentMethod: value,
              discount,
              orderItems,
              customerID: customerID1,
            };
            const result = onChange(modelFields);
            value = result?.paymentMethod ?? value;
          }
          if (errors.paymentMethod?.hasError) {
            runValidationTasks("paymentMethod", value);
          }
          setPaymentMethod(value);
        }}
        onBlur={() => runValidationTasks("paymentMethod", paymentMethod)}
        errorMessage={errors.paymentMethod?.errorMessage}
        hasError={errors.paymentMethod?.hasError}
        {...getOverrideProps(overrides, "paymentMethod")}
      ></TextField>
      <TextField
        label="Discount"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={discount}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              customerId,
              dateAndTime,
              totalAmount,
              status,
              shippingAddress,
              paymentMethod,
              discount: value,
              orderItems,
              customerID: customerID1,
            };
            const result = onChange(modelFields);
            value = result?.discount ?? value;
          }
          if (errors.discount?.hasError) {
            runValidationTasks("discount", value);
          }
          setDiscount(value);
        }}
        onBlur={() => runValidationTasks("discount", discount)}
        errorMessage={errors.discount?.errorMessage}
        hasError={errors.discount?.hasError}
        {...getOverrideProps(overrides, "discount")}
      ></TextField>
      <TextAreaField
        label="Order items"
        isRequired={false}
        isReadOnly={false}
        value={orderItems}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              customerId,
              dateAndTime,
              totalAmount,
              status,
              shippingAddress,
              paymentMethod,
              discount,
              orderItems: value,
              customerID: customerID1,
            };
            const result = onChange(modelFields);
            value = result?.orderItems ?? value;
          }
          if (errors.orderItems?.hasError) {
            runValidationTasks("orderItems", value);
          }
          setOrderItems(value);
        }}
        onBlur={() => runValidationTasks("orderItems", orderItems)}
        errorMessage={errors.orderItems?.errorMessage}
        hasError={errors.orderItems?.hasError}
        {...getOverrideProps(overrides, "orderItems")}
      ></TextAreaField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              customerId,
              dateAndTime,
              totalAmount,
              status,
              shippingAddress,
              paymentMethod,
              discount,
              orderItems,
              customerID: value,
            };
            const result = onChange(modelFields);
            value = result?.customerID ?? value;
          }
          setCustomerID1(value);
          setCurrentCustomerID1Value(undefined);
        }}
        currentFieldValue={currentCustomerID1Value}
        label={"Customer id"}
        items={customerID1 ? [customerID1] : []}
        hasError={errors?.customerID?.hasError}
        errorMessage={errors?.customerID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.customerID(
                customerRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentCustomerID1DisplayValue(
            value
              ? getDisplayValue.customerID(
                  customerRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentCustomerID1Value(value);
        }}
        inputFieldRef={customerID1Ref}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Customer id"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search Customer"
          value={currentCustomerID1DisplayValue}
          options={customerRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.customerID?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentCustomerID1Value(id);
            setCurrentCustomerID1DisplayValue(label);
            runValidationTasks("customerID", label);
          }}
          onClear={() => {
            setCurrentCustomerID1DisplayValue("");
          }}
          defaultValue={customerID1}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.customerID?.hasError) {
              runValidationTasks("customerID", value);
            }
            setCurrentCustomerID1DisplayValue(value);
            setCurrentCustomerID1Value(undefined);
          }}
          onBlur={() =>
            runValidationTasks("customerID", currentCustomerID1Value)
          }
          errorMessage={errors.customerID?.errorMessage}
          hasError={errors.customerID?.hasError}
          ref={customerID1Ref}
          labelHidden={true}
          {...getOverrideProps(overrides, "customerID")}
        ></Autocomplete>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || orderModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || orderModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
