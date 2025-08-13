"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "~/components/ui/input-otp";

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

export function VerifyEmailForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You submitted the following values", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <FormField
            control={form.control}
            name="pin"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup className="flex gap-2">
                      <InputOTPSlot
                        index={0}
                        className="h-16 w-16 border first:rounded-none first:border-l last:rounded-none"
                      />
                      <InputOTPSlot
                        index={1}
                        className="h-16 w-16 border first:rounded-none first:border-l last:rounded-none"
                      />
                      <InputOTPSlot
                        index={2}
                        className="h-16 w-16 border first:rounded-none first:border-l last:rounded-none"
                      />
                      <InputOTPSlot
                        index={3}
                        className="h-16 w-16 border first:rounded-none first:border-l last:rounded-none"
                      />
                      <InputOTPSlot
                        index={4}
                        className="h-16 w-16 border first:rounded-none first:border-l last:rounded-none"
                      />
                      <InputOTPSlot
                        index={5}
                        className="h-16 w-16 border first:rounded-none first:border-l last:rounded-none"
                      />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full flex justify-center bg-custom-primary"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
