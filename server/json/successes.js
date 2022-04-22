const success = {
  added: {
    error: false,
    successType: "post",
    successMessage: "Saved",
  },
  updated: {
    error: false,
    successType: "patch",
    successMessage: "Updated",
  },
  deleted: {
    error: false,
    successType: "delete",
    successMessage: "Deleted",
  },
};

exports.success = success;
