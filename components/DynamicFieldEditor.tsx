'use client';

import React from 'react';
import { CustomField } from '@/models/MediaFile';

interface DynamicFieldEditorProps {
  fields: CustomField[];
  onFieldsChange: (fields: CustomField[]) => void;
}

export default function DynamicFieldEditor({
  fields,
  onFieldsChange,
}: DynamicFieldEditorProps) {
  const handleAddField = () => {
    const newField: CustomField = {
      fieldName: `Field ${fields.length + 1}`,
      value: '',
      x: 50,
      y: 50 + fields.length * 30,
      fontSize: 12,
    };
    onFieldsChange([...fields, newField]);
  };

  const handleRemoveField = (index: number) => {
    onFieldsChange(fields.filter((_, i) => i !== index));
  };

  const handleFieldChange = (
    index: number,
    key: keyof CustomField,
    value: any
  ) => {
    const updatedFields = [...fields];
    updatedFields[index] = {
      ...updatedFields[index],
      [key]: value,
    };
    onFieldsChange(updatedFields);
  };

  return (
    <div className="space-y-4">
      {fields.map((field, index) => (
        <div key={index} className="border border-gray-300 rounded-md p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Field Name
              </label>
              <input
                type="text"
                value={field.fieldName}
                onChange={(e) =>
                  handleFieldChange(index, 'fieldName', e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                placeholder="e.g., Customer Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Value
              </label>
              <input
                type="text"
                value={field.value}
                onChange={(e) => handleFieldChange(index, 'value', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                placeholder="Enter text value"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                X Position (px)
              </label>
              <input
                type="number"
                value={field.x}
                onChange={(e) =>
                  handleFieldChange(index, 'x', parseInt(e.target.value))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                min="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Y Position (px)
              </label>
              <input
                type="number"
                value={field.y}
                onChange={(e) =>
                  handleFieldChange(index, 'y', parseInt(e.target.value))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                min="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Font Size
              </label>
              <input
                type="number"
                value={field.fontSize}
                onChange={(e) =>
                  handleFieldChange(index, 'fontSize', parseInt(e.target.value))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                min="8"
                max="72"
              />
            </div>
          </div>

          <button
            onClick={() => handleRemoveField(index)}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded text-sm transition duration-200"
          >
            Remove Field
          </button>
        </div>
      ))}

      <button
        onClick={handleAddField}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition duration-200"
      >
        + Add Custom Field
      </button>
    </div>
  );
}
