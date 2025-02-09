export const updateUser = async (req, res) => {
    try {
      let updateData = req.body;
      
      if (req.file) {
        updateData.photo = req.file.path;
      }
  
      const updatedUser = await User.findByIdAndUpdate(req.user.id, updateData, { new: true }).select("-password");
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: "Error updating user" });
    }
  };
  