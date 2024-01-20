"use client";
import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  getKeyValue,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Input,
  Select,
  SelectItem,
  Avatar,
} from "@nextui-org/react";

import { useForm, Controller } from "react-hook-form";

import icons from "@/app/utils/icons";

const { FileIcon } = icons.authScreenIcon;

const Dashboard = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    trigger,
  } = useForm({
    defaultValues: {
      name: "",
      file: "",
      status: "",
    },
  });

  const [rows, setRows] = useState([]);

  const columns = [
    {
      key: "name",
      label: "NAME",
    },
    {
      key: "file",
      label: "FILE",
    },
    {
      key: "status",
      label: "STATUS",
    },
  ];

  const handleRender = (e) => {
    return new Promise((resolve, reject) => {
      const file = e;
      try {
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            const fileRender = e.target.result;
            resolve(fileRender);
          };
          reader.readAsDataURL(e);
        } else {
          resolve(null);
        }
      } catch (error) {
        console.error("Something wrong", error);
        reject(error);
      }
    });
  };

  const statuses = ["Active", "Non Active"];

  const onSubmit = async (data) => {
    const { name, file, status } = data;
    handleRender(file).then((fileRender) => {
      try {
        setRows((values) => [
          ...values,
          {
            key: values.length + 1,
            name,
            file: fileRender,
            status,
          },
        ]);
      } catch (error) {
        console.log("Something wrong!", error);
      }
    });
  };

  return (
    <>
      <Modal
        data-test="form-modal"
        backdrop="blur"
        placement="center"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add Data
              </ModalHeader>
              <form onSubmit={handleSubmit(onSubmit)}>
                <ModalBody>
                  <Input
                    id="name"
                    label={"Name"}
                    variant="bordered"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Nama wajib diisi!",
                      },
                    })}
                    errorMessage={errors?.name?.message}
                  ></Input>
                  <Controller
                    control={control}
                    name="file"
                    rules={{
                      required: {
                        value: true,
                        message: "File wajib diisi!",
                      },
                    }}
                    render={({ field }) => {
                      const [
                        fileSelected,
                        setFileSelected,
                      ] = useState(null);
                      return (
                        <FileInput
                          setFile={(data) => {
                            field.onChange(data);
                          }}
                          fileSelected={fileSelected}
                          setFileSelected={setFileSelected}
                          title={"Upload Image"}
                          id={"file"}
                          errorMessage={
                            errors?.file?.message
                          }
                          desc={
                            "Image, file size no more than 5MB"
                          }
                        />
                      );
                    }}
                  />
                  <Controller
                    name="status"
                    rules={{
                      required: {
                        value: true,
                        message: "Status wajib diisi!",
                      },
                    }}
                    control={control}
                    render={({ field }) => {
                      return (
                        <Select
                          id="status"
                          label="Select status"
                          variant="bordered"
                          onSelectionChange={(value) =>
                            field.onChange(value)
                          }
                          errorMessage={
                            errors?.status?.message
                          }
                        >
                          {statuses.map((status) => (
                            <SelectItem
                              key={status}
                              value={status}
                              color="primary"
                            >
                              {status}
                            </SelectItem>
                          ))}
                        </Select>
                      );
                    }}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="danger"
                    variant="light"
                    onPress={onClose}
                  >
                    Close
                  </Button>
                  <Button
                    type="submit"
                    color="primary"
                    onPress={async () => {
                      const result = await trigger();
                      if (result) {
                        onClose();
                      }
                    }}
                  >
                    Action
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
      <div className="container py-8 flex flex-col gap-4">
        <div className="flex justify-end">
          <Button onClick={() => onOpen()} color="primary">
            Add Data
          </Button>
        </div>
        <Table aria-label="Example table with dynamic content">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>
                {column.label}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={rows}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => (
                  <TableCell>
                    {columnKey === "file" ? (
                      <Avatar
                        size="lg"
                        src={getKeyValue(item, columnKey)}
                      />
                    ) : (
                      getKeyValue(item, columnKey)
                    )}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

const FileInput = ({
  title,
  desc,
  name,
  id,
  htmlFor,
  onBlur,
  value,
  ref,
  accept,
  setFile,
  isPdf = false,
  nameItem,
  defaultValue,
  errorMessage,
  setFileSelected = () => {},
  fileSelected,
}) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    try {
      if (file.size <= 2097152) {
        if (file && !isPdf) {
          setFile(file);
          const reader = new FileReader();
          reader.onload = (e) => {
            setFileSelected(e.target.result);
          };
          reader.readAsDataURL(e.target.files[0]);
        }

        if (file && isPdf) {
          setFile(file);

          setFileSelected(file.name);
        }
      }
    } catch (error) {
      console.error("Something wrong", error);
    }
  };

  return (
    <>
      <label
        htmlFor={htmlFor}
        className={`w-full flex-col border-dashed h-[283px] border-2 rounded-[10px] place-items-center flex cursor-pointer transition-default hover:bg-green10 overflow-hidden group ${
          errorMessage ? "border-error" : "border-gray-200"
        } ${
          (!isPdf && fileSelected) || defaultValue
            ? "p-4"
            : "p-0"
        }`}
      >
        <input
          className="sr-only"
          type="file"
          name={name}
          id={id}
          ref={ref}
          onChange={handleFileChange}
          accept={
            isPdf
              ? ".pdf"
              : `.png, .jpg, ${accept && accept}`
          }
          value={value && value.name}
          onBlur={onBlur}
        />
        {(!isPdf && fileSelected) ||
        (!isPdf && defaultValue) ? (
          <img
            src={fileSelected ?? defaultValue}
            className="h-full object-contain"
            alt=""
          />
        ) : (isPdf && fileSelected) ||
          (isPdf && defaultValue) ? (
          <div className="h-full flex flex-col items-center justify-center gap-3">
            <FileIcon />
            <p className="text-primary text-center text-paragraph8">
              {fileSelected ?? defaultValue}
            </p>
          </div>
        ) : (
          <>
            <img
              src="/assets/images/img-upload.png"
              alt="Picture of the author"
              className="mt-14 mix-blend-darken w-12 h-12"
            />
            <p className="mt-6">{title ?? ""}</p>
            <p className="text-paragraph9Res mt-3 opacity-40">
              {desc
                ? desc
                : "JPG or PNG, file size no more than 5MB"}
            </p>
            <span className="btn bg-primary rounded-full text-white mt-6 capitalize px-8 py-2 hover:bg-green70 shadow-defaultShadow">
              Upload
            </span>
          </>
        )}
      </label>
      {errorMessage && (
        <p className="text-danger-500 text-xs">
          {errorMessage}
        </p>
      )}
    </>
  );
};

export default Dashboard;
