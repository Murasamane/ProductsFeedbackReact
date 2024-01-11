// eslint-disable-next-line no-unused-vars
import supabase from "./supabase";
export async function getFeedbacks() {
  const { data, error } = await supabase.from("feedbacks").select("*");

  if (error) {
    console.error(error);
    throw new Error("Feedbacks could not be loaded");
  }
  return data;
}

export async function getFeedback(id) {
  const { data: feedback, error } = await supabase
    .from("feedbacks")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("feedback could not be loaded");
  }
  return feedback;
}
export async function getEditFeedback(id) {
  const { data: feedback, error } = await supabase
    .from("feedbacks")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("feedback could not be loaded");
  }
  return feedback;
}

export async function addFeedback(newFeedback) {
  const { data: feedback, error } = await supabase
    .from("feedbacks")
    .insert([newFeedback])
    .select();

  if (error) {
    console.error(error);
    throw new Error("feedback could not be loaded");
  }
  return feedback;
}

export async function editFeedback(newFeedbackData) {
  const { data: feedback, error } = await supabase
    .from("feedbacks")
    .update({
      title: newFeedbackData.title,
      category: newFeedbackData.category,
      status: newFeedbackData.status,
      description: newFeedbackData.description,
    })
    .eq("id", newFeedbackData.id)
    .select();

  if (error) {
    console.error(error);
    throw new Error("feedback could not be loaded");
  }
  return feedback;
}

export async function deleteFeedback(id) {
  const { error } = await supabase.from("feedbacks").delete().eq("id", +id);
  if (error) {
    console.error(error);
    throw new Error("feedback could not be loaded");
  }
}

export async function upvote(upvoteObj) {
  const { data: feedback, error } = await supabase
    .from("feedbacks")
    .update({ upvotes: upvoteObj.upvotes + 1, upvoted: true })
    .eq("id", upvoteObj.id)
    .select();

  if (feedback.upvoted === true) return;
  if (error) {
    console.error(error);
    throw new Error("feedback could not be loaded");
  }
  return feedback;
}
export async function downVote(upvoteObj) {
  const { data: feedback, error } = await supabase
    .from("feedbacks")
    .update({ upvotes: upvoteObj.upvotes - 1, upvoted: false })
    .eq("id", upvoteObj.id)
    .select();

  if (feedback.upvoted === true) return;
  if (error) {
    console.error(error);
    throw new Error("feedback could not be loaded");
  }
  return feedback;
}

export async function addComment({ id, comment }) {
  const { data: InitialFeedback, error: initialError } = await supabase
    .from("feedbacks")
    .select("*")
    .eq("id", id)
    .single();
  if (initialError) {
    console.error(initialError);
    throw new Error("feedback could not be loaded");
  }
  const { data: feedback, error } = await supabase
    .from("feedbacks")
    .update({ comments: [...InitialFeedback.comments, comment] })
    .eq("id", id)
    .select();

  if (feedback.upvoted === true) return;
  if (error) {
    console.error(error);
    throw new Error("feedback could not be loaded");
  }
  return feedback;
}
